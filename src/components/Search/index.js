import React from 'react';
import './index.css';
import { Form, Input, Button } from 'antd';

//AntD Form Layout Declaration
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 12 },
  };

//Where the form itself is stored
const SongForm = () => {
  
    return (
      <Form
        {...layout}
        name="basic"
      >
        <Form.Item
          label="Artist"
          name="Artist"
          rules={[{ required: true, message: 'Please enter an artist name!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Song"
          name="song"
          rules={[{ required: true, message: 'Please enter a song name!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Go
          </Button>
          <Button htmlType="reset" >
            Reset
          </Button>
        </Form.Item>
      </Form>
    );
  };

//The main function which will be exported

function Search() {
    let songName = 'Placeholder'
    return (
        <div>
            <SongForm />
            <br />
        </div>
    )
}


export default Search;
