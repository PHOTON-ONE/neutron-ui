import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css"

class Table extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url, {
      method: 'GET'
    }).then(response => response.json()).then(posts => {
      // console.log("posts", posts)
      this.setState({ posts });
    })
  }

  deleteRow(id) {
    console.log("id", id);
  }

  render() {
    const columns = [
      {
        Header: 'User ID',
        accessor: 'userId',
        style: {
          textAlign: "right"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: 'ID',
        accessor: 'id',
        style: {
          textAlign: "right"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: 'Title',
        accessor: 'title',
        sortable: false,
        filterable: false
      },
      {
        Header: 'Content',
        accessor: 'body',
        sortable: false,
        filterable: false
      },
      // {
      //   Header: 'Actions',
      //   Cell: props => {
      //     return (
      //       <button style={{ backgroundColor: 'white', color: 'black', border: '2px solid #f44336' }}
      //         onClick={() => {
      //           this.deleteRow(props.original.id);
      //         }}>Delete</button>
      //     )
      //   },
      //   sortable: false,
      //   filterable: false,
      //   width: 100,
      //   maxWidth: 100,
      //   minWidth: 100
      // }
    ]
    return (
      <ReactTable
        columns={columns}
        data={this.state.posts}
        // filterable
        defaultPageSize={10}
        noDataText={"Please Wait..."}
      >

      </ReactTable >
    );
  }
}

export default Table;