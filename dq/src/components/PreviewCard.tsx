import React from 'react';
import { Link } from 'react-router-dom';
import { HomeFilterCategory } from './HomeFilter';
import './PreviewCard.css';

enum PreviewCardSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

enum PreviewCardColor {
    Red = 'red',
    Green = 'green',
    Blue = 'blue',
}

interface PreviewCardProps {
    link: string;
    callToAction: string;
    content: React.ReactNode;
    currentCategory: HomeFilterCategory;
    cardCategory: HomeFilterCategory;
    color: PreviewCardColor;
    size: PreviewCardSize;
}

const PreviewCard = (props: PreviewCardProps) => {
    const { link, callToAction, content, currentCategory, cardCategory, color, size } = props;
    const showCard = currentCategory === cardCategory || currentCategory === HomeFilterCategory.Everything;

    return (
        <div className={'preview-card ' + size + ' ' + color}>
            {
                showCard ? (
                    <Link className='preview-card-inner' to={link} >
                        <div className='preview-card-cta'>
                            {callToAction}
                        </div>
                        <div className='preview-card-content'>
                            {content}
                        </div>
                    </Link>) : (null)
            }
        </div>
    );
}

export {
    PreviewCard, PreviewCardColor, PreviewCardSize
};
