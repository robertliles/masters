import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
    render() {
        const {repos} = this.props;

        return (
            <div>
                <h2>Repos</h2>
                <ul>
                {repos.map((repo) =>
                    <li key={repo.id}><span className="octicon octicon-repo"></span> <a href={repo.appUrl}>{repo.full_name}</a></li>
                )}
                </ul>
            </div>
        );
    }
});
