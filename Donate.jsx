import styles from "./Donate.module.css";
import banyan from "./media/tree-images/banyan.jpeg";
import atc from "./media/tree-images/atc.png";
import peepal from "./media/tree-images/peepal.png"
import neem from "./media/tree-images/neem.avif";
import sandalwood from "./media/tree-images/sandalwood.jpeg";
import rubber from "./media/tree-images/rubber.avif";
import teak from "./media/tree-images/teak.jpg";
import user from "./media/tree-images/user.jpg";
import help from "./media/tree-images/help.png";
import home from "./media/tree-images/home.png";


function Donate() {
    return (
        <>
        
        <div className={styles.navbar}>
        <h1 className={styles.heading1}>THINK GLOBAL,</h1>
        <h1 className={styles.heading2}>PLANT LOCAL!</h1>
    </div>
    <div className={styles.container}>
        <div className={styles.table}>
            <div className={styles.trees2}>
                <div className={styles.tree}>
                    <img src={banyan} className={styles.treeImage} alt="Banyan Tree" />
                    <div className={styles.treeDetails}>
                        <span className={styles.treeName}>Banyan Tree</span>
                        <p className={styles.treeDescription}>The Banyan tree is known for its large canopy and aerial roots. It&apos;s a symbol of longevity and eternal life in many cultures.</p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.addCartBtn}>Add To Cart <img src={atc} className={styles.cartIcon} alt="Cart Icon"/></button>
                        <button className={styles.priceBtn}>@Rs10</button>
                    </div>
                </div>
                <div className={styles.tree}>
                    <img src={peepal} className={styles.treeImage} alt="Peepal Tree"/>
                    <div className={styles.treeDetails}>
                        <span className={styles.treeName}>Peepal Tree</span>
                        <p className={styles.treeDescription}>The Peepal tree, also known as the sacred fig, is revered in many cultures.It is used in making medicines also.</p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.addCartBtn}>Add To Cart <img src={atc} className={styles.cartIcon} alt="Cart Icon"/></button>
                        <button className={styles.priceBtn}>@Rs10</button>
                    </div>
                </div>
                <div className={styles.tree}>
                    <img src={neem} className={styles.treeImage} alt="Neem Tree"/>
                    <div className={styles.treeDetails}>
                        <span className={styles.treeName}>Neem Tree</span>
                        <p className={styles.treeDescription}>Neem tree is widely known for its medicinal properties. It&apos;s often used in traditional medicine and as a natural pesticide.</p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.addCartBtn}>Add To Cart <img src={atc} className={styles.cartIcon} alt="Cart Icon"/></button>
                        <button className={styles.priceBtn}>@Rs10</button>
                    </div>
                </div>
                <div className={styles.tree}>
                    <img src={sandalwood} className={styles.treeImage} alt="Sandalwood Tree"/>
                    <div className={styles.treeDetails}>
                        <span className={styles.treeName}>Sandalwood Tree</span>
                        <p className={styles.treeDescription}>Sandalwood trees are known for their aromatic wood. They are used in incense, perfumes, and traditional rituals.</p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.addCartBtn}>Add To Cart <img src={atc} className={styles.cartIcon} alt="Cart Icon"/></button>
                        <button className={styles.priceBtn}>@Rs10</button>
                    </div>
                </div>
                <div className={styles.tree}>
                    <img src={rubber} className={styles.treeImage} alt="Rubber Tree"/>
                    <div className={styles.treeDetails}>
                        <span className={styles.treeName}>Rubber Tree</span>
                        <p className={styles.treeDescription}>Rubber trees are the primary source of natural rubber. They are cultivated extensively in tropical regions, used for medical purposes.</p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.addCartBtn}>Add To Cart <img src={atc} className={styles.cartIcon} alt="Cart Icon"/></button>
                        <button className={styles.priceBtn}>@Rs10</button>
                    </div>
                </div>
                <div className={styles.tree}>
                    <img src={teak} className={styles.treeImage} alt="Teak Tree"/>
                    <div className={styles.treeDetails}>
                        <span className={styles.treeName}>Teak Tree</span>
                        <p className={styles.treeDescription}>Teak trees are valued for their durable wood, which is resistant to pests and weather conditions. High oxygen producing</p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.addCartBtn}>Add To Cart <img src={atc} className={styles.cartIcon} alt="Cart Icon"/></button>
                        <button className={styles.priceBtn}>@Rs10</button>
                    </div>
                </div>
            </div>
            <button className={styles.paymentBtn}>Proceed To Payment</button>
        </div>
    </div>n
    <div className={styles.footer}>
        <p>© 2024 Think Global, Plant Local. All rights reserved.</p>
        </div>
        <button className={styles.imgUser}> <img src={user} /> </button>
        <button className={styles.imgUser1}> <img src={help} /> </button>
        <button className={styles.imgUser3}> <img src={home} /> </button>

       
   
        </>
    )
}

export default Donate