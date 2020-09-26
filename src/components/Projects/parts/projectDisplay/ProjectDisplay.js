import React, { Fragment } from 'react';
import styles from './styles/ProjectDisplay.module.css';

class ProjectPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imgIsLoaded: false }
    }


    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.project.gifSrc !== nextProps.project.gifSrc) return true;
        if (!(this.state.imgIsLoaded === true && nextState.imgIsLoaded === false)) return true;
        return false;
    }

    loadImg(path) {
        new Promise((resolve, reject) => {
            const img = new Image()
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

    componentDidUpdate() {
        if (!this.props.project.isLoaded) { // skip if img was already preloaded
            if (!this.state.imgIsLoaded) {
                this.loadImg(this.props.project.gifSrc) // load image
            } else {
                // if image was successfully loaded and displayed change state to
                // imgIsLoaded to false so stettings are reseted when user click on another project
                const setImgFlase = async () => await this.setState({ imgIsLoaded: false });
                setImgFlase()
            }
        } else {
            console.log('Nice, project was already loaded.')
        }

    }

    render() {
        const imgIsLoaded = this.state.imgIsLoaded;

        // check if img was already preloaded before of if it start loading when component last updated
        const img = (this.props.project.isLoaded || imgIsLoaded) ?
            <img id="gif" className={styles.gif} src={this.props.project.gifSrc} alt="gif" />
            : <div className={styles.spinnerContainer}><div></div><div className={styles.spinner}></div></div>;

        return (
            <div className={styles.projPreview}>
                <div className={styles.ipad + " " +
                    (this.props.project.display === "portrait" ? styles.ipadPortrait : styles.ipadLandscape)}>
                    {
                        this.props.project.gifSrc ?
                            img
                            :
                            <Fragment>
                                <img id="gif" className={styles.gif} src="/img/img_missing_.jpg" alt="img" />
                                <div className={styles.imgMissing}></div>
                            </Fragment>
                    }
                </div>
            </div>
        )
    }
}

export default ProjectPreview;