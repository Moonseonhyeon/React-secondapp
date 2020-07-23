import React, { Component } from "react";
import Post from "./Post";
import styled from "styled-components";

//스타일 컴포넌트는 무조건 class 밖에!! 이유는 그릴 때 마다 포커스문제가 있다.
const ContainerBox = styled.div`
  display: grid;
  justify-content: center;
`;

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "제목1",
      },
      {
        id: 2,
        title: "제목2",
      },
      {
        id: 3,
        title: "제목3",
      },
    ],
  };

  render() {
    const add = () => {
      this.setState({
        posts: this.state.posts.concat({ id: 4, title: "제목4" }),
      });
    };

    const del = () => {
      this.setState({
        posts: this.state.posts.filter((post) => {
          return post.id !== 2;
        }),
      });
    };

    const update = () => {
      const data = {
        id: 2,
        title: "제목200",
      };

      this.setState({
        posts: this.state.posts.map((post) =>
          post.id === 2 ? { ...post, ...data } : post
        ),
      });
    };

    return (
      <ContainerBox>
        <button onClick={add}>추가</button>
        <button onClick={del}>삭제</button>
        <button onClick={update}>수정</button>
        {this.state.posts.map((post) => {
          return <Post id={post.id} title={post.title} />;
        })}
      </ContainerBox>
    );
  }
}

export default App;
