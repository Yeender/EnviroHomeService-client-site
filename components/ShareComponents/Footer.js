import { useRouter } from 'next/router';

const Footer = () => {
    const activeRouter = useRouter();
    return (
        <footer>
            <div className="container-xl">
                {activeRouter.pathname === '/' ?
                    <div>
                        <iframe className='w-100' style={{ height: '400px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7230519.135312326!2d-75.53786901628555!3d44.13408989062044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce07bb13b1180d%3A0x7971611bb15bb7e0!2s1547%20Merivale%20Rd%2C%20Nepean%2C%20ON%20K2G%203J4!5e0!3m2!1sen!2sca!4v1614665876965!5m2!1sen!2sca" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                    : ""}

                <br />
                <div className="text-center">
                    <a href="https://facebook.com/ottawa.reno.92" target="_blank">
                        <img src="/facebook.png" alt="" className="facebook" />
                    </a>

                    <p>1547 Merivale Rd </p>
                    <p>Nepean, ON K2G 3J4</p>
                    <h5>Phone : 613-861-1566 </h5>
                    <h5>Email : helpmeottawareno@gmail.com</h5>
                </div>
                <p className="text-center p-3 mt-0 mb-0">
                    Copyright Ottawa-Reno {new Date().getFullYear()}{' '}
                </p>
            </div>
        </footer>
    );
};

export default Footer;