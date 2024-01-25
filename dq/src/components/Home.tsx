import './Home.css';
import PreviewCard from './PreviewCard';
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-container">
            <div className='home-summary'>
                <h1>
                    danqi designs
                </h1>
                <br></br>
                <div className='home-filter'>
                    <NavLink to='/'
                        className={({ isActive }) => {
                            let linkClass = "home-filter-link";
                            if (isActive) linkClass += " active-home-filter-link";
                            return linkClass;
                        }}>Everything</NavLink>
                    <NavLink to='/product'
                        className={({ isActive }) => {
                            let linkClass = "home-filter-link";
                            if (isActive) linkClass += " active-home-filter-link";
                            return linkClass;
                        }}>Product</NavLink>
                    <NavLink to='/brand'
                        className={({ isActive }) => {
                            let linkClass = "home-filter-link";
                            if (isActive) linkClass += " active-home-filter-link";
                            return linkClass;
                        }}>Brand</NavLink>
                    <NavLink to='/motion'
                        className={({ isActive }) => {
                            let linkClass = "home-filter-link";
                            if (isActive) linkClass += " active-home-filter-link";
                            return linkClass;
                        }}>Motion</NavLink>
                    <NavLink to='/ai'
                        className={({ isActive }) => {
                            let linkClass = "home-filter-link";
                            if (isActive) linkClass += " active-home-filter-link";
                            return linkClass;
                        }}>AI</NavLink>
                    <NavLink to='/index'
                        className={({ isActive }) => {
                            let linkClass = "home-filter-link";
                            if (isActive) linkClass += " active-home-filter-link";
                            return linkClass;
                        }}>Index</NavLink>
                </div>
            </div>
            <div className='home-preview-card-container'>
                <PreviewCard
                    link={"/coach"}
                    callToAction={'Coach'}
                    content={<p>some preview of work for coach</p>}
                    color="red"
                    size="large"
                />
                <PreviewCard
                    link={"/matcha"}
                    callToAction={'Matcha Finance'}
                    content={<p>some preview of work for matcha finance</p>}
                    color='green'
                    size='medium'
                />
                <PreviewCard
                    link={"/common"}
                    callToAction={'Common'}
                    content={<p>some preview of work for common</p>}
                    color='blue'
                    size='small'
                />
            </div>
        </div >
    )

}

export default Home;