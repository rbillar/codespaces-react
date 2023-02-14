

const Button = ({color, text}) => {
    return(

        <button style={{backgroundcolor: color}}
        className='btn'>
            {text}
        </button>
    )
}

Button.defaultProps= {
    color: 'steelblue'
}

Button.propTypes = {
    text : PropTypes.string,
    color : PropTypes.string,
}
export default Button
