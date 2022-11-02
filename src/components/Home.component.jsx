const Home = ({ slide }) => {
    let keyword;

    switch (slide) {
        case 1:
            keyword = 'looked';
            break;
        case 2:
            keyword = 'felt';
            break;
        case 3:
            keyword = 'been';
            break;
        case 4:
            keyword = 'looked';
            break;
    
        default:
            keyword = 'looked';
            break;
    }

    return (
        <div className="home" data-bg={slide}>
            <h1>
                Senior living<br/>has never<br/><span class="home__keyword">{keyword}</span><br/>this good!
            </h1>
        </div>
    );
}

export default Home;
