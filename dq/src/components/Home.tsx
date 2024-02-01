import { useState } from 'react';
import baiduPreview from '../assets/baidu-preview.png';
import coachPreview from '../assets/coach-preview.gif';
import matchaPreview from '../assets/matcha-preview.jpg';
import natePreview from '../assets/nate-preview.gif';
import stevensonPreview from '../assets/stevenson-preview.png';
import youtubePreview from '../assets/youtube-preview.png';
import nyuPreview from '../assets/nyu-preview.png';
import bakaPreview from '../assets/baka-preview.png';
import commonPreview from '../assets/common-preview.jpg';
import './Home.css';
import { HomeFilter, HomeFilterCategory } from './HomeFilter';
import { PreviewCard, PreviewCardColor, PreviewCardSize } from './PreviewCard';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(HomeFilterCategory.Everything);

    return (
        <div className="home-container">
            <div className='home-summary'>
                <h1>
                    danqi designs
                </h1>
            </div>
            <HomeFilter
                currentFilterCategory={selectedCategory}
                updateFilterCategory={setSelectedCategory}
            />
            <div className='home-preview-card-container'>
                <PreviewCard
                    link={"/coach"}
                    callToAction={'Coach'}
                    content={<img src={coachPreview} />}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Motion}
                    color={PreviewCardColor.Red}
                    size={PreviewCardSize.Large}
                />
                <PreviewCard
                    link={"/matcha"}
                    callToAction={'Matcha Finance'}
                    content={<img src={matchaPreview} />}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Brand}
                    color={PreviewCardColor.Green}
                    size={PreviewCardSize.Medium}
                />
                <PreviewCard
                    link={"/common"}
                    callToAction={'Common'}
                    content={<img src={commonPreview} />}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Ai}
                    color={PreviewCardColor.Blue}
                    size={PreviewCardSize.Small}
                />
                <PreviewCard
                    link={"/youtube"}
                    callToAction={'YouTube'}
                    content={<img src={youtubePreview} />}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Motion}
                    color={PreviewCardColor.Red}
                    size={PreviewCardSize.Large}
                />
                <PreviewCard
                    link={"/baidu"}
                    callToAction={'Baidu'}
                    content={<img src={baiduPreview} />}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Motion}
                    color={PreviewCardColor.Green}
                    size={PreviewCardSize.Small}
                />
                <PreviewCard
                    link={"/nyulangone"}
                    callToAction={'NYU Langone'}
                    content={<img src={nyuPreview} />}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Motion}
                    color={PreviewCardColor.Blue}
                    size={PreviewCardSize.Medium}
                />
                <PreviewCard
                    link={"/nate"}
                    callToAction={'Nate'}
                    content={<img src={natePreview} />}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Motion}
                    color={PreviewCardColor.Red}
                    size={PreviewCardSize.Small}
                />
                <PreviewCard
                    link={"/baka"}
                    callToAction={'Baka'}
                    content={<img src={bakaPreview} />}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Ai}
                    color={PreviewCardColor.Green}
                    size={PreviewCardSize.Medium}
                />
                <PreviewCard
                    link={"/stevenson"}
                    callToAction={'Stevenson High'}
                    content={<img src={stevensonPreview} />}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Product}
                    color={PreviewCardColor.Blue}
                    size={PreviewCardSize.Large}
                />
            </div>
        </div >
    )

}

export default Home;