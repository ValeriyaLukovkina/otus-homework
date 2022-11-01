import style from './TimeTotal.module.scss';
import Time from './Time/Time';

const TimeTotal = (props) => {
    return (
        <div className={style.wrp}>
            <Time />
            <Time />
            <Time />
        </div>
    )
}

export default TimeTotal;