// import Image from 'next/image';

const WeBuildForYou = () => (
    <div className="container-xl">
        <section className="WeBuildForYou-content-area">
            <h1 className="WeBuildForYou-maine-title">WHAT CAN WE BUILD FOR YOU?</h1>
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4s justify-content-center">
                <div className="col">
                    <div className="weDo_cards card">
                        <img className="img-fluid" src="https://i.imgur.com/8IcPKnR.png" alt="" />
                        <h1>KITCHENS</h1>
                    </div>
                </div>
                <div className="col">
                    <div className="weDo_cards card">
                        <img src="https://i.imgur.com/xsIKyi0.png" alt="" />
                        <h1>BATHROOMS</h1>
                    </div>
                </div>
                <div className="col">
                    <div className="weDo_cards card">
                        <img src="https://i.imgur.com/5oGRjV0.png" alt="" />
                        <h1>BASEMENTS</h1>
                    </div>
                </div>
                <div className="col">
                    <div className="weDo_cards card">
                        <img src="https://i.imgur.com/Q1sjhjH.png" alt="" />
                        <h1>COMMERCIAL</h1>
                    </div>
                </div>
                <div className="col">
                    <div className="weDo_cards card">
                        <img src="https://i.imgur.com/0Xrc9xk.png" alt="" />
                        <h1>RENOVATIONS</h1>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default WeBuildForYou;
