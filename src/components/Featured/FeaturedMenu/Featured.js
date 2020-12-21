import React, { useRef, useEffect, useState, Component } from 'react';
import classes from './Featured.module.css';
import FeaturedItem from '../FeaturedItens/FeaturedItens';
import { getRandomGame } from '../../../development';

class Featured extends Component {

    state = {
        isSticky: false,
        isOver: false,
        lastWindowYOffset: 0,
        lastScrollYOffset: 0,
        isTicking: 0,
        scrolldelay: 1,
        transform: 0
    }

    scrollBar = React.createRef();
    scroll = React.createRef();
    featured = React.createRef();

    // componentDidMount () {
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    // handleScroll = (event) =>{
    //     let scrollTop = event.srcElement.body.scrollTop,
    //         itemTranslate = Math.min(0, scrollTop/3 - 60);

    //     this.setState({transform: itemTranslate});
    // }

    componentDidMount() {
        window.addEventListener('scroll', () => this.scrollHandler())
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false
    }

    scrollHandler = () => {

        if (window.pageYOffset >= document.getElementById('banner-content').clientHeight) {
            this.setState({ isSticky: true })
        } else if (window.pageYOffset <= document.getElementById('banner-content').clientHeight) {
            this.setState({ isSticky: false })
        }


        // let yOffset = this.state.lastScrollYOffset + (window.scrollY / Math.abs(window.scrollY)) * this.state.scrolldelay;
        // console.log(yOffset)
        // if (this.state.isOver) {

        //     window.scrollTo(0, this.state.lastWindowYOffset)

        //     const maxScrollHeight = this.scrollBar.current.clientHeight - this.scroll.current.clientHeight;

        //     if (!this.state.isTicking) {
        //         window.requestAnimationFrame(() => {

        //             if (yOffset < maxScrollHeight) {
        //                 this.scroll.current.style.top = `${yOffset}px`;
        //             } else if (yOffset < 0) {
        //                 this.scroll.current.style.top = `0px`;
        //             } else {
        //                 this.scroll.current.style.top = `${maxScrollHeight}px`;
        //                 yOffset = maxScrollHeight;
        //             }
        //             this.setState({ isTicking: false, lastScrollYOffset: yOffset })

        //         });

        //         this.setState({ isTicking: true })
        //     }



        // } else {

        //     this.state.lastWindowYOffset = window.scrollY;
        // }


    }



    render() {

        // const mouseEvent = (flag) => {
        //     if (!flag) {
        //         this.setState({ lastWindowYOffset: window.scrollY });
        //         // window.scrollTo(0, window.scrollY)
        //     } else {

        //         // window.scrollTo(0, this.state.lastWindowYOffset)
        //     }
        //     this.setState({ isOver: flag })
        // }

        return (
            <section className={[classes.FeaturedMain, this.state.isSticky ? classes.sticky : null].join(" ")}
                ref={this.featured}>

                <div className={[classes.grid, classes.ItensContainer].join(" ")}>

                    <FeaturedItem gridPosition={classes.firstItem} bigItem showExpanded item={getRandomGame()}>Item1</FeaturedItem>
                    <FeaturedItem gridPosition={classes.secondItem} item={getRandomGame()}>Item2</FeaturedItem>
                    <FeaturedItem gridPosition={classes.thirdItem} item={getRandomGame()}>Item3</FeaturedItem>
                    <FeaturedItem gridPosition={classes.fourthItem} item={getRandomGame()}>Item4</FeaturedItem>
                    <FeaturedItem gridPosition={classes.fifthItem} item={getRandomGame()}>Item5</FeaturedItem>
                    <FeaturedItem gridPosition={classes.sixthItem} item={getRandomGame()}>Item6</FeaturedItem>

                    <div className={classes.scroll} ref={this.scrollBar}>
                        <div className={classes.scrollBar} ref={this.scroll} >

                        </div>
                    </div>

                </div>

            </section>
        )
    }



}

export default Featured;