import { Button, Form, Input, Popconfirm, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { usersAPI } from "../../api/usersAPI";
import "./Users.css";
import moment from "moment";
import FormModal from "../../components/FormModal/FormModal";
import { message } from "../../utils/message";
import _ from "lodash";
import { useGlobalData } from "../../components/GlobalDataProvider/GlobalDataProvider";

const Users = () => {
  const [users, setUsers] = useState();
  const [isShowModalAdd, setShowModalAdd] = useState(false);
  const [isShowModalEdit, setShowModalEdit] = useState(false);
  const [userToEdit, setUserToEdit] = useState();
  const [formAddUser] = Form.useForm();
  const [formEditUser] = Form.useForm();
  const ContextData = useGlobalData();

  // READ user
  useEffect(() => {
    const readUsers = async () => {
      ContextData.handleLoading(true);
      const responseData = await usersAPI.read(
        "https://629992b36f8c03a97844fe0d.mockapi.io/users"
      );
      ContextData.handleLoading(false);
      setUsers(responseData);
    };
    readUsers();
  }, []);

  // CREATE user
  const createUserInState = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleAddUser = () => {
    formAddUser
      .validateFields()
      .then(async (values) => {
        formAddUser.resetFields();
        const requestData = {
          ...values,
          createdAt: moment().format(),
        };
        const responseData = await usersAPI.create(
          "https://629992b36f8c03a97844fe0d.mockapi.io/users",
          requestData
        );
        if (responseData.status === 201) {
          setShowModalAdd(false);
          createUserInState({
            ...requestData,
            id: users.length,
          });
          message("success", "Add new user success!");
        } else {
          message("error", "Add new user fail!");
        }
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  // UPDATE User
  const handleEditUserInState = (newUser) => {
    const indexUserToUpdate = users.findIndex(
      (user) => user.id === userToEdit.id
    );
    const temp = [...users];
    temp.splice(indexUserToUpdate, 1, newUser);
    setUsers(temp);
  };
  const handleEditUser = () => {
    formEditUser
      .validateFields()
      .then(async (values) => {
        if (
          values.name !== userToEdit.name ||
          values.title !== userToEdit.title
        ) {
          formEditUser.resetFields();
          const requestData = {
            ...values,
            id: userToEdit.id,
            createdAt: userToEdit.createdAt,
          };
          const responseData = await usersAPI.update(
            "https://629992b36f8c03a97844fe0d.mockapi.io/users",
            requestData
          );
          if (responseData.status === 200) {
            setShowModalEdit(false);
            handleEditUserInState(requestData);
            message("success", "Edit user success!");
          } else {
            message("error", "Edit user fail!");
          }
        } else {
          message("error", "Nothing to update!");
        }
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  // DELETE User
  const deleteUserInState = (id) => {
    const newListUsers = users.filter((user) => user.id !== id);
    setUsers(newListUsers);
  };
  const handleDeleteUser = async (record) => {
    const responseData = await usersAPI.delete(
      "https://629992b36f8c03a97844fe0d.mockapi.io/users",
      record.id
    );
    console.log(responseData);
    if (responseData.status === 200) {
      setShowModalAdd(false);
      deleteUserInState(record.id);
      message("success", "Delete user success!");
    } else {
      message("error", "Delete user fail!");
    }
  };

  // Table Config
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: "30%",
    },
    {
      title: "Title",
      dataIndex: "title",
      render: (_, record) => {
        return <Tag color="cyan">{record.title.toUpperCase()}</Tag>;
      },
      width: "30%",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (_, record) => moment(record.createdAt).format("YYYY-MM-DD"),
      width: "20%",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            className="button-edit"
            onClick={() => {
              setShowModalEdit(true);
              setUserToEdit(record);
            }}
          >
            Edit
          </Button>

          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDeleteUser(record)}
            onCancel={() => null}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
      width: "20%",
    },
  ];

  return (
    <div className="users-wrapper">
      <FormModal
        form={formAddUser}
        modalTitle="Add new user"
        formName="add-new-user"
        isVisible={isShowModalAdd}
        handleOk={() => handleAddUser()}
        handleCancel={() => setShowModalAdd(false)}
        okText="Create"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the name of user!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the name of user!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </FormModal>

      <FormModal
        form={formEditUser}
        modalTitle="Edit user"
        formName="edit-user"
        isVisible={isShowModalEdit}
        handleOk={() => handleEditUser()}
        handleCancel={() => setShowModalEdit(false)}
        okText="Update"
        defaultValue={userToEdit}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the name of user!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the name of user!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </FormModal>

      <Table
        columns={columns}
        dataSource={users}
        footer={() => (
          <Button
            type="primary"
            block
            size="large"
            onClick={() => setShowModalAdd(true)}
          >
            Add new one
          </Button>
        )}
      />
    </div>
  );
};

export default Users;
