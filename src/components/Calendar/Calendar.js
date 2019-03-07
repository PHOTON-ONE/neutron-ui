import React, { Component } from 'react';
import injectSheet from 'react-jss';
import * as moment from 'moment';

const styles = {
    root: {
        
    }
};  

class Calendar extends Component {

    constructor(props) {
        super(props);

        const initialDate = props.initialDate.split("-");

        this.state = {
            active: {
                day: initialDate[2] || 5,
                month: initialDate[1] || 1,
                year: initialDate[0] || 2006,
                mom: moment(props.initialDate) || moment("2006-1-5")
            },

        }
    }

    getDays = () => {
        const fields = 42;
        const date = this.state.active;
        const daysInMonth = date.mom.daysInMonth();

        const offset = fields - daysInMonth;
        const halfOffset = Math.floor(offset/2);

        let dates = [];

        for(var i = -halfOffset; i < daysInMonth + halfOffset; i++) {
            let _date = this.state.active.mom;

            if(i >= 0) {
                _date = moment(_date).add(i, 'days');
            } else {
                _date = moment(_date).subtract(i, 'days');
            }

            dates.push(_date);
        }

        return dates;
    }

    renderRows = () =>{
        let rows = [];

        for(var i =0; i < 7; i++) {
            rows.push(<tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>);
        }
        
        return rows;
    }

    render() {
        this.props.onChange(this.state.active);

        

        return (
            <table className={this.props.classes.root}>
                <thead>
                    Rok i miesiąc
                    Dni tygodnia
                </thead>
                <tbody>
                    <tr>
                        {
                            this.getDays().map(e => {
                                const day = moment(e).day();

                                return <td>{day}</td>
                            })
                        }
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default injectSheet(styles)(Calendar);