import React from 'react';
import data from '../data';
import './table.scss';
import ShowMoreText from 'react-show-more-text';
import AddPostLink from './AddPostLink';

const Table = () => {
  return (
    <table>
      <thead>
        <th>Post Name</th>
        <th>Post Type</th>
        <th>Cost Per View</th>
        <th>Cost Per Engagement</th>
        <th>Views</th>
        <th>Likes</th>
        <th>Comments</th>
        <th>Link Clicks</th>
      </thead>
      <tbody>
        {data.posts.map((post, index) => (
          <tr key={post.id}>
            <td>
              <img src="" alt="" />
              <div className="postname__desc">
                <div className="text">{post.title}</div>

                <div className="date">
                  <i>Added on : {post.date}</i>
                </div>
              </div>
            </td>
            <td>{post.type}</td>
            <td>{post.costPerView}</td>
            <td>{post.costPerEngagement}</td>
            <td>{post.views}</td>
            <td>{post.likes}</td>
            <td>{post.comments}</td>
            <td>{post.linkClicks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
