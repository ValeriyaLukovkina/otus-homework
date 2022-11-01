import style from './Time.module.scss';

const Time = (props) => {
    return (
        <div>
            <h3 className={style.title}>Sunrise</h3>
            <div className={style.clock}>
                <div className={style.clock_hands}>
                    <span className={style.clock_hands_span}></span>
                </div>
                <div className={style.clock_time}>
                    <p className={style.clock_time_txt}>11:24</p>
                </div>
            </div>
        </div>
    )
}

export default Time;