import React from 'react';
import { Link } from 'react-router-dom'
import './PreviewCard.css';

interface PreviewCardProps {
    link: string;
    callToAction: string;
    content: React.ReactNode;
    color: string;
    size: string;
}

const PreviewCard = (props: PreviewCardProps) => {
    const { link, callToAction, content, color, size } = props;

    return (
        <Link to={link}>
            <div className={"preview-card " + color + " " + size}>
                <div className="preview-card-cta">
                    {callToAction}
                </div>
                <div className="preview-card-content">
                    {content}
                </div>
            </div>
        </Link>
    );
}

export default PreviewCard;