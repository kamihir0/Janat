import React from 'react'
import BannerPhoto from '../../assets/img/bannerex2.png'
import cls from './Banner.module.scss'


const Banner = () => {
    return (
        <div className={cls.Banner}>
            <div>
                <h1>O НАС</h1>
                <p>Мы здесь не для того, чтобы увлечь вас фитнесом, мы здесь для того, чтобы мотивировать вас стремиться к своим целям.</p>
                <br />
                <br />
                <p>Если вы не уверены в своих целях или не знаете, с чего начать свой фитнес-путь, приходите и поговорите с нашим квалифицированным тренером, который поможет вам разработать план.</p>
            </div>
            <img src={BannerPhoto} alt="" />
        </div>

    )
}


export default Banner