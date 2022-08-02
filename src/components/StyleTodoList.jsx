import styled from "styled-components";

export const STodoList = styled.div`
  min-height: 100vh;
  background-color: rgb(231, 71, 95);
  padding-top: 100px;

  h1 {
    text-align: center;
    color: white;
    font-size: 50px;
  }
  form {
    display: block;
    margin: 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    max-width: 500px;
    padding: 10px;

    input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 15px;
    }

    button{
        background: #f52020;
        color: white;
        padding: 8px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
  }
`;
