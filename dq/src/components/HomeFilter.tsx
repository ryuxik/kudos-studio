import './HomeFilter.css';

let getHomeFilterClassNames = (currentFilterCategory: HomeFilterCategory, category: HomeFilterCategory) => {
    let homeFilterclass = 'home-filter-link';
    if (currentFilterCategory === category) homeFilterclass += ' active-home-filter-link';
    return homeFilterclass;
}


enum HomeFilterCategory {
    Everything = "everything",
    Product = 'product',
    Motion = 'motion',
    Brand = 'brand',
    Ai = 'ai',
}

interface HomeFilterProps {
    currentFilterCategory: HomeFilterCategory;
    updateFilterCategory: (category: HomeFilterCategory) => void;
}

const HomeFilter = (props: HomeFilterProps) => {
    const { currentFilterCategory, updateFilterCategory } = props;

    return (
        <div className='home-filter'>
            <div
                className={getHomeFilterClassNames(currentFilterCategory, HomeFilterCategory.Everything)}
                onClick={() => updateFilterCategory(HomeFilterCategory.Everything)}>
                Everything
            </div>
            <div
                className={getHomeFilterClassNames(currentFilterCategory, HomeFilterCategory.Product)}
                onClick={() => { updateFilterCategory(HomeFilterCategory.Product) }}>
                Product
            </div>
            <div
                className={getHomeFilterClassNames(currentFilterCategory, HomeFilterCategory.Brand)}
                onClick={() => updateFilterCategory(HomeFilterCategory.Brand)}>
                Brand
            </div>
            <div
                className={getHomeFilterClassNames(currentFilterCategory, HomeFilterCategory.Motion)}
                onClick={() => updateFilterCategory(HomeFilterCategory.Motion)}>
                Motion
            </div>
            <div
                className={getHomeFilterClassNames(currentFilterCategory, HomeFilterCategory.Ai)}
                onClick={() => updateFilterCategory(HomeFilterCategory.Ai)}>
                AI
            </div>
        </div>
    );
}

export { HomeFilter, HomeFilterCategory };
