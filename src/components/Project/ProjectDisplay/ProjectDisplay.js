import React, { Fragment } from 'react';
import styles from './styles/ProjectDisplay.module.css';

class ProjectPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imgIsLoaded: false }
        this.loadImg = this.loadImg.bind(this);
        this.manageImgLoading = this.manageImgLoading.bind(this);
    }


    shouldComponentUpdate(nextProps, nextState) {
        // reload if new user clicked another project
        if (this.props.project.gifSrc !== nextProps.project.gifSrc) return true;
        // do not reload if imgIsLoaded status is being reseted to false.
        if (!(this.state.imgIsLoaded === true && nextState.imgIsLoaded === false)) return true;
        return false;
    }

    loadImg(path) {
        new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(path)
            img.onerror = () => reject()
            img.src = path
        })
            .then(async p => {
                try {
                    await this.setState({ imgIsLoaded: true })
                } catch (err) {
                    console.log('changing state to true: ', err)
                }
            })
            .catch(err => console.log(err))
    }

    manageImgLoading() {
        const imgIsLoaded = this.state.imgIsLoaded;
        const imgIsPreLoaded = this.props.project.isLoaded;
        const imgSrc = this.props.project.gifSrc;

        // skip if img was already preloaded or there is no img source url
        if (imgIsPreLoaded || !imgSrc) {
            // reset state 
            imgIsLoaded ?
                this.setState({ imgIsLoaded: false })
                : this.setState({ imgIsLoaded: true });

        } else {
            if (imgIsLoaded) {
                // if image was successfully loaded and displayed change state to
                // imgIsLoaded to false so stettings are reseted when user click on another project
                const setImgFalse = async () => await this.setState({ imgIsLoaded: false });
                setImgFalse();
            } else {
                // load img if not preloaded
                this.loadImg(imgSrc)
            }
        }
    }

    componentDidMount() {
        this.manageImgLoading();
    }

    render() {
        const imgIsLoaded = this.state.imgIsLoaded;
        const imgSrc = this.props.project.gifSrc;
        const image = <Img imgIsLoaded={imgIsLoaded} imgSrc={imgSrc} />
        const orientationStyle = this.props.project.display === "portrait"
            ? styles.ipadPortrait
            : styles.ipadLandscape;

        return (
            <div className={styles.projPreview}>
                <div className={styles.ipad + " " + orientationStyle}>
                    {image}
                </div>
            </div>
        )
    }
}


const Img = ({ imgIsLoaded, imgSrc, ...props }) => {
    if (!imgSrc) {
        // return missimg img preview
        return (
            <Fragment>
                <img id="gif" className={styles.gif} src="/img/img_missing_.jpg" alt="img" />
                <div className={styles.imgMissing}></div>
            </Fragment>
        );
    };

    if (imgIsLoaded) {
        // return image
        return (
            <img id="gif" className={styles.gif}
                src={imgSrc} alt="gif" />
        )
    } else {
        return (
            // return loading spinner
            <div className={styles.spinnerContainer}>
                <div></div>
                <div className={styles.spinner}></div>
            </div>
        );
    }
}


export default ProjectPreview;