import React from 'react';

function HomeScreen() {
    const centerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      };
  return (
    <div style={centerStyle}>
        <h1> HOME</h1>
        <h3> add : /add?x=3&y=5</h3>
        <h3> sub : /sub?x=3&y=5</h3>
        <h3> mul : /mul?x=3&y=5</h3>
        <h3> div : /div?x=3&y=5</h3>
    </div>
  );
}

export default HomeScreen;