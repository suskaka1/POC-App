import React, { Component } from "react";
import "./NewTeamMember.css";
import { Form, Message } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class NewTeamMember extends Component {
  state = {
  }
  constructor(props) {
    super(props);
    this.state = {
      isValidEntry: true,
      isInValidEntry: true
    }
  }

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div>
        <h2>Member Details </h2>
        <div className="ui divider"></div>
        <div>
          <Form success error>
            <Form.Group widths='equal'>
              <Form.Input fluid label='First name' placeholder='First name' />
              <Form.Input fluid label='Last name' placeholder='Last name' />
              <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Email Id' placeholder='test@ibm.com' />
            </Form.Group>

            <Form.Group inline>
              <label>Skill</label>
              <Form.Radio
                label='Programming'
                value='prg'
                checked={value === 'prg'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Development'
                value='dev'
                checked={value === 'dev'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Design'
                value='dig'
                checked={value === 'dig'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Testing'
                value='test'
                checked={value === 'test'}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.TextArea label='About' placeholder='Tell us more about you...' />
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <div  className="space" hidden={this.state.isValidEntry}>
              <div class="ui success message" >
                <div class="content">
                  <p>Details submitted</p>
                </div>
              </div></div>

            <div className="space" hidden={this.state.isInValidEntry}>
              <div class="ui error message " >
                <div class="content">
                  <p>Please insert the valid data</p>
                </div>
              </div>
            </div>

            <div className="field space"><button class="ui button">Submit</button></div>
          </Form>
        </div>
      </div>
    );
  }
}

export default NewTeamMember;