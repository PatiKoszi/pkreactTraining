import React from 'react'

const style = {
    fontsize: 'large'
};

class AppIntro extends React.Component {
    render() {
        return (
            <div style ={style}>
                {
                    this.props.beautify ? this.props.beautify(this.props.message) :
                        this.props.message
                }
            </div>



        )
    }
}
export default AppIntro