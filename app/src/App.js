import React, { useState } from "react"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      id: 0,
      name: '',
      dob: '',
      std: '',
      div: '',
      gender: ''
    }

  }
  componentDidMount() {
    axios.get("http://localhost:8080/api/")
      .then((res) => {
        this.setState({
          users: res.data,
          id: 0,
          name: '',
          dob: '',
          std: '',
          div: '',
          gender: ''
        })
      })


  }
  submit(evenet,id) {
    evenet.preventDefault();
    if (id===0) {
      axios.post("http://localhost:8080/api/", {
        name:this.state.name,
        dob:this.state.dob,
        std:this.state.std,
        div:this.state.div,
        gender:this.state.gender
      }).then(() => {
        this.componentDidMount();
      })
    }else{
      axios.put("http://localhost:8080/api/", {
        id:id,
        name: this.state.name,
        dob: this.state.dob,
        std: this.state.std,
        div: this.state.div,
        gender: this.state.gender
      }).then(() => {
        this.componentDidMount();
      })

    }

  }
  delete(id){
    axios.delete("http://localhost:8080/api/"+id)
    .then(()=>{
      this.componentDidMount();
    })
  }
  edit(id){
    axios.get("http://localhost:8080/api/"+id)
    .then((res)=>{
      this.setState({
        id:res.data.id,
        name:res.data.name,
        dob:res.data.dob,
        std:res.data.std,
        div:res.data.div,
        gender:res.data.gender
      })
    })

  }
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={(e) => this.submit(e, this.state.id)}>
              <div className="mb-3 mt-5">
                <label for="name" className="form-label">Enter Name</label>
                <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} type="text" className="form-control" id="name" required="true" />

              </div>
              <label for="" className="form-label">Enter Date of birth</label>
              <div className="mb-3">
                <select onChange={(e) => this.setState({ dob: e.target.value })}  className="form-select w-25 d-inline-block " aria-label="Default select example" required="true">
                  
                  <option selected>Day</option>
                  <option value={this.state.dob} value="1">1</option>
                  <option value={this.state.dob} value="2">2</option>
                  <option value={this.state.dob} value="3">3</option>
                  <option value={this.state.dob} value="4">4</option>
                  <option value={this.state.dob} value="5">5</option>
                  <option value={this.state.dob} value="6">6</option>
                  <option value={this.state.dob} value="7">7</option>
                  <option value={this.state.dob} value="8">8</option>
                  <option value={this.state.dob} value="9">9</option>
                  <option value={this.state.dob} value="10">10</option>
                  <option value={this.state.dob} value="11">11</option>
                  <option value={this.state.dob} value="12">12</option>
                  <option value={this.state.dob} value="13">13</option>
                  <option value={this.state.dob} value="14">14</option>
                  <option value={this.state.dob} value="15">15</option>
                  <option value={this.state.dob} value="16">16</option>
                  <option value={this.state.dob} value="17">17</option>
                  <option value={this.state.dob} value="18">18</option>
                  <option value={this.state.dob} value="19">19</option>
                  <option value={this.state.dob} value="20">20</option>
                  <option value={this.state.dob} value="21">21</option>
                  <option value={this.state.dob} value="22">22</option>
                  <option value={this.state.dob} value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <select onChange={(e) => this.setState({ dob: e.target.value })} className="form-select w-25 d-inline-block m-1" aria-label="Default select example" required="true">
                  
                  <option selected>Month</option>
                  <option value={this.state.dob} value="1">Jan</option>
                  <option value={this.state.dob} value="2">Feb</option>
                  <option value={this.state.dob} value="3">March</option>
                  <option value={this.state.dob} value="4">April</option>
                  <option value={this.state.dob} value="5">May</option>
                  <option value={this.state.dob} value="6">June</option>
                  <option value={this.state.dob} value="7">July</option>
                  <option value={this.state.dob} value="8">Aug</option>
                  <option value={this.state.dob} value="9">Sept</option>
                  <option value={this.state.dob} value="10">Oct</option>
                  <option value={this.state.dob} value="11">Nov</option>
                  <option value={this.state.dob} value="12">Dec</option>
                </select>
                <select onChange={(e) => this.setState({ dob: e.target.value })} className="form-select w-25 d-inline-block" aria-label="Default select example" required="true">
                  
                  <option selected>Year</option>
                  <option value={this.state.dob} value="1990">1990</option>
                  <option value={this.state.dob} value="1991">1991</option>
                  <option value={this.state.dob} value="1992">1992</option>
                  <option value={this.state.dob} value="1992">1992</option>
                  <option value={this.state.dob} value="1993">1993</option>
                  <option value={this.state.dob} value="1994">1994</option>
                  <option value={this.state.dob} value="1995">1995</option>
                  <option value={this.state.dob} value="1996">1996</option>
                  <option value={this.state.dob} value="1997">1997</option>
                  <option value={this.state.dob} value="1998">1998</option>
                  <option value={this.state.dob} value="1999">1999</option>
                  <option value={this.state.dob} value="2000">2000</option>
                  <option value={this.state.dob} value="2001">2001</option>
                  <option value={this.state.dob} value="2002">2002</option>
                  <option value={this.state.dob} value="2003">2003</option>
                  <option value={this.state.dob} value="2004">2004</option>
                  <option value={this.state.dob} value="2005">2005</option>
                  <option value={this.state.dob} value="2006">2006</option>
                  <option value={this.state.dob} value="2007">2007</option>
                  <option value={this.state.dob} value="2008">2008</option>
                  <option value={this.state.dob} value="2009">2009</option>
                  <option value={this.state.dob} value="2010">2010</option>
                  <option value={this.state.dob} value="2011">2011</option>
                  <option value={this.state.dob} value="2012">2012</option>
                  <option value={this.state.dob} value="2013">2013</option>
                  <option value={this.state.dob} value="2014">2014</option>
                  <option value={this.state.dob} value="2015">2015</option>
                  <option value={this.state.dob} value="2016">2016</option>
                  <option value={this.state.dob} value="2017">2017</option>
                  <option value={this.state.dob} value="2018">2018</option>
                  <option value={this.state.dob} value="2019">2019</option>
                  <option value={this.state.dob} value="2020">2020</option>
                  <option value={this.state.dob} value="2021">2021</option>

                </select>
              </div>
              <div>
                <label for="" className="form-label">Choose class</label>
                <select onChange={(e) => this.setState({ std: e.target.value })}  className="form-select" aria-label="Default select example" required="true">
                  
                  <option selected>Select class</option>
                  <option value={this.state.std} value="1">1</option>
                  <option value={this.state.std} value="2">2</option>
                  <option value={this.state.std} value="3">3</option>
                  <option value={this.state.std} value="4">4</option>
                  <option value={this.state.std} value="5">5</option>
                  <option value={this.state.std} value="6">6</option>
                  <option value={this.state.std} value="7">7</option>
                  <option value={this.state.std} value="8">8</option>
                  <option value={this.state.std} value="9">9</option>
                  <option value={this.state.std} value="10">10</option>
                  <option value={this.state.std} value="11">11</option>
                  <option value={this.state.std} value="12">12</option>
                </select>
              </div>
              <div>
                <label for="" className="form-label mt-2">Choose Division</label>
                <select onChange={(e) => this.setState({ div: e.target.value })} className="form-select " aria-label="Default select example" required="true">
                
                  <option selected>Select Division</option>
                  <option value={this.state.div} value="A">A</option>
                  <option value={this.state.div} value="B">B</option>
                  <option value={this.state.div} value="C">C</option>
                </select>
              </div>
              <div>
                <label for="" className="form-label mt-3">Choose Gender</label>
              </div>
              <div>

                <div className="form-check form-check-inline">
                  <input  className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={this.state.gender} onChange={(e) => this.setState({ gender: e.target.value })} value="male" />
                  
                  <label className="form-check-label" for="inlineRadio1">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={this.state.gender} onChange={(e) => this.setState({ gender: e.target.value })} value="Female" />
                  
                  <label className="form-check-label" for="inlineRadio2">Female</label>
                </div>

              </div>
              <button type="submit" className="btn btn-primary mt-3 ml-auto">Submit</button>

            </form>

          </div>
          <div className="col-md-6">
            <table className="table mt-5">
              <thead>
                <tr>
                  
                  <th scope="col">Name</th>
                  <th scope="col">Date of birth</th>
                  <th scope="col">Class</th>
                  <th scope="col">Division</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.users.map(user => 
                    <tr key={user.id}>
                      
                      <td>{user.name}</td>
                      <td>{user.dob}</td>
                      <td>{user.std}</td>
                      <td>{user.div}</td>
                      <td>{user.gender}</td>
                      <td><button onClick={(e)=>this.edit(user.id)} type="submit" className="btn btn-primary">Edit</button></td>
                      <td><button onClick={(e)=>this.delete(user.id)} type="submit" className="btn btn-primary">Delete</button></td>
                    </tr>
                  )
                }

              </tbody>
            </table>

          </div>

        </div>

      </div>


    );

  }

}


export default App;
