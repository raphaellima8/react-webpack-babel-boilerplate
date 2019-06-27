/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../../presentational/Input';
import Title from '../../presentational/Title';

const PageContainer = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const LoginBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 600px) {
    width: 300px;
    height: 50%;
    padding: 5px 15px;
    border-radius: 2px;
    border: 1px solid;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  overflow: hidden;
  align-self: center;
  border-radius: 4px;
  padding: 1px 16px;
  border: #2980b9 2px solid;
  margin-bottom: 20px;
`;

const BoxHeader = styled.section`
  height: 20%;
  display: flex;
  justify-content: center;
`;

const LoginButton = styled.button`
  width: 100%;
  margin: 0;
  border: none;
  height: 30px;
  background: #3498db;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  background-position: center;
  transition: background 0.8s;
  &:hover {
    background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
      center/15000%;
  }
  &:active {
    background-color: #6eb9f7;
    background-size: 100%;
    transition: background 0s;
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }

  handleInputChange = event => {
    const { value, type } = event.target;
    const key = type === 'text' ? 'login' : 'password';
    this.setState({ [key]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state);
  };

  render() {
    return (
      <PageContainer>
        <LoginBox>
          <BoxHeader>
            <Title text="Login" />
          </BoxHeader>
          <form onSubmit={this.onSubmit}>
            <InputWrapper>
              <Input
                type="text"
                placeholder="E-mail"
                onInputChange={this.handleInputChange}
                removeDefaultStyle={true}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                type="password"
                placeholder="Password"
                onInputChange={this.handleInputChange}
                removeDefaultStyle={true}
              />
            </InputWrapper>
            <LoginButton>OI</LoginButton>
          </form>
        </LoginBox>
      </PageContainer>
    );
  }
}

export default Login;