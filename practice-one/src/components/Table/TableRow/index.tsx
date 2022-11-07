import React from 'react';

import Avatar from '../../Avatar';
import { IUser } from '../../../types/IUser';
import moreVert from '../../../assets/images/moreVertIcon.jpg';
import RowMore from '../RowMore';

import './index.css';

export interface IProps {
  user: IUser;
  order: number;
}

class TableUserRow extends React.Component<IProps> {
  renderCell = <T, K extends keyof T, V extends keyof T>(data: T[] | undefined, key: K, id: V) => {
    //Check data empty
    if (!data) {
      return '';
    }

    return data.map((item: T) => <p key={item[id] as string}>{item[key] as string}</p>);
  };

  render(): React.ReactNode {
    const { name, email, avatar, projects } = this.props.user;

    const { order } = this.props;

    return (
      <>
        <tr>
          <td>{order}</td>
          <td>
            <Avatar username={name} styles="circle" size="small" url={avatar} alt="avatar" />
          </td>
          <td>{email}</td>

          <td>{this.renderCell(projects, 'projectName', 'id')}</td>
          <td>{this.renderCell(projects, 'role', 'id')}</td>
          <td>{this.renderCell(projects, 'status', 'id')}</td>

          <td>
            <img src={moreVert} />
          </td>
        </tr>
        <RowMore />
      </>
    );
  }
}

export default TableUserRow;