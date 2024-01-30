import { useState } from 'react';
import './Home.css';
import { HomeFilter, HomeFilterCategory } from './HomeFilter';
import { PreviewCard, PreviewCardColor, PreviewCardSize } from './PreviewCard';


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(HomeFilterCategory.Everything)

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
                    content={<p>some preview of work for Coach</p>}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Motion}
                    color={PreviewCardColor.Red}
                    size={PreviewCardSize.Large}
                />
                <PreviewCard
                    link={"/matcha"}
                    callToAction={'Matcha Finance'}
                    content={<p>some preview of work for Matcha Finance</p>}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Brand}
                    color={PreviewCardColor.Green}
                    size={PreviewCardSize.Medium}
                />
                <PreviewCard
                    link={"/common"}
                    callToAction={'Common'}
                    content={<p>some preview of work for Common</p>}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Ai}
                    color={PreviewCardColor.Blue}
                    size={PreviewCardSize.Small}
                />
                <PreviewCard
                    link={"/youtube"}
                    callToAction={'YouTube'}
                    content={<p>some preview of work for YouTube</p>}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Motion}
                    color={PreviewCardColor.Red}
                    size={PreviewCardSize.Large}
                />
                <PreviewCard
                    link={"/baidu"}
                    callToAction={'Baidu'}
                    content={<p>some preview of work for Baidu</p>}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Motion}
                    color={PreviewCardColor.Green}
                    size={PreviewCardSize.Small}
                />
                <PreviewCard
                    link={"/nyulangone"}
                    callToAction={'NYU Langone'}
                    content={<p>some preview of work for NYU Langone</p>}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Motion}
                    color={PreviewCardColor.Blue}
                    size={PreviewCardSize.Medium}
                />
                <PreviewCard
                    link={"/nate"}
                    callToAction={'Nate'}
                    content={<p>some preview of work for Nate</p>}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Motion}
                    color={PreviewCardColor.Red}
                    size={PreviewCardSize.Small}
                />
                <PreviewCard
                    link={"/baka"}
                    callToAction={'Baka'}
                    content={<p>some preview of work for Baka</p>}
                    currentCategory={selectedCategory}
                    cardCategory={HomeFilterCategory.Ai}
                    color={PreviewCardColor.Green}
                    size={PreviewCardSize.Medium}
                />
                <PreviewCard
                    link={"/stevenson"}
                    callToAction={'Stevenson High'}
                    content={<p>some preview of work for Stevenson High</p>}
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