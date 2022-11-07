// Library
import React from 'react';

// Component
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import SearchFilter from '../../components/SearchFilter';
import DropdownMenu from '../../components/DropdownMenu';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import ListUser from '../../components/Table/ListUsers';

import { OPTIONS_ROLE, OPTIONS_PROJECT } from '../../constants/dropdown';
import { avatars, userNames, listUser, emails } from '../../mocks/info';
import { IUser } from '../../types/IUser';
import { createUser } from '../../helpers/createUser';

// CSS
import './index.css';

interface IProps {
  children?: React.ReactNode;
}

interface IState {
  listUser: IUser[];
}

class Home extends React.Component<IProps, IState> {
  state = { listUser: [] };

  // Add a user in data
  handleAddUser = (): void => {
    const newUser = createUser(userNames, avatars, emails);

    listUser.push(newUser);
    this.setState({ listUser: listUser });
  };

  render(): React.ReactNode {
    return (
      <div className="container">
        <Header />
        <Content>
          <SearchFilter>
            <DropdownMenu options={OPTIONS_ROLE} />
            <DropdownMenu options={OPTIONS_PROJECT} />
          </SearchFilter>
          <div className="main-content">
            <div className="page-wrapper">
              <TextField type="text" placeholder="Search name..." />
              <Button variant="primary" size="medium" onClick={this.handleAddUser}>
                Add User
              </Button>
            </div>
            <ListUser list={listUser} />
          </div>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Home;
