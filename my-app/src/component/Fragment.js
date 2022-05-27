import React from 'react';
import FragmentChild from './FragmentChild';
function Fragment()
{
    return(
        <React.Fragment>
            <h3>Fragments</h3>
            <p>It let us to group list of children elements without creating extra nodes to DOM</p>
            <table>
                <tbody>
                    <tr>
                        <FragmentChild />
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}
export default Fragment