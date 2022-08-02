import styled from "styled-components";

export const STaskItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;

  .task-left {
    display: flex;
    align-items: center;

    input {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    .name {
      margin-left: 10px;
      font-size: 16px;
    }
  }

  .task-right {
    cursor: pointer;
  }
`;
