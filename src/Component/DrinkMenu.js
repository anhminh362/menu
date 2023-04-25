import React, { Component } from 'react';

class DrinkMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            type:'',
            price:'',
            money:''
        }
    }
    checkOrder=(money)=>{
        if(money>=this.state.price){
            alert("Đồ uống của bạn đây: "+this.state.type+'\n Số tiền thừa: '+(money-this.state.price)+'đ')
        }
        else{
            alert("Tiền của bạn không đủ vui lòng kiếm thêm tiền để mua")
        }
    }
    submitForm=(e)=>{
        e.preventDefault();
        if(this.state.price==''){
            alert("Vui lòng chọn đồ uống")
        }
        else{
            if(this.state.money==''){
                alert('Vui lòng nhập số tiền của bạn')
            }
            else{
                this.checkOrder(this.state.money)
            }
        }
    }
    setHandle=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        if(name=='money'){
            if(!Number(value)){
                alert("Nhập số vào bạn ơi")
            }
        }
        if(name=='type'){
            if(value=='Cà phê sữa'){
                this.setState({price: 12000})
            }
            else if(value=='Cà phê đá'){
                this.setState({price: 10000})
            }
            else if(value=='Sting'){
                this.setState({price: 8000})
            }
            else {
                this.setState({price: 2000})
            }
        }
        this.setState({[name]:value})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Mời chọn thức uống</td>
                                <td>
                                    <select name='type' onChange={this.setHandle}>
                                        <option selected hidden>Mời chọn</option>
                                        <option value='Cà phê sữa'>Cà phê sữa</option>
                                        <option value='Cà phê đá'>Cà phê đá</option>
                                        <option value='Sting'>Sting</option>
                                        <option value='Trà đá'>Trà đá</option>
                                    </select>
                                </td>
                                <td><label>Price---{this.state.price}</label></td>
                            </tr>
                            <tr>
                                <td>Mời nhập tiền của bạn</td>
                                <td>
                                    <input name="money" type='number' onChange={this.setHandle}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type='submit' value='Thanh toán'></input>
                </form>
            </div>
        );
    }
}

export default DrinkMenu;