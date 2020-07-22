import React, { Component } from "react";
import Post from "./Post";
import styled from "styled-components";

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
    const ContainerBox = styled.div`
      display: grid;
      justify-content: center;
    `;

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

    return (
      <ContainerBox>
        <button onClick={add}>추가</button>
        <button onClick={del}>삭제</button>
        {this.state.posts.map((post) => {
          return <Post id={post.id} title={post.title} />;
        })}
      </ContainerBox>
    );
  }
}

export default App;
