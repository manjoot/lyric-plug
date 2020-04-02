import React from 'react';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';

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
    const onFinish = values => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
        </Form.Item>
      </Form>
    );
  };

//The main function which will be exported

function Search() {
    return (
        <div>
            <SongForm />
        </div>
    )
}


export default Search;
