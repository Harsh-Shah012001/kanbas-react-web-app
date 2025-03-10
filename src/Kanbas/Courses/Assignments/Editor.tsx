export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the assignments, Link to the Kanbas application. Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
      </textarea>
      <br /><br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="Assignments">Assignments</option>
              <option value="Lab">Lab</option>
            </select>
          </td>
        </tr><br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
              <option value="Absolute">Absolute</option>
            </select>
          </td>
        </tr><br />


        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select><br /><br /><br />

            <label>Online Entry Options</label><br />

            <input type="checkbox" name="online-entry-options" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label><br />

            <input type="checkbox" name="online-entry-options" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label><br />

            <input type="checkbox" name="online-entry-options" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />

            <input type="checkbox" name="online-entry-options" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />

            <input type="checkbox" name="online-entry-options" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr><br />

        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign To</label><br />
            <input id="wd-assign-to" placeholder="Everyone" value="Everyone" /> <br /><br />

            <label htmlFor="wd-due-date">Due </label><br />
            <input type="date"
              id="wd-due-date"
              value="2024-05-13" /><br /><br />
            <tr>
              <td>
                <label htmlFor="wd-available-from">Available From </label>
              </td>
              <td>
                <label htmlFor="wd-available-until">Until </label>
              </td>
              </tr>
              <tr>
              <td>
                <input type="date"
                  id="wd-available-from"
                  value="2024-05-06" />
              </td>
              <td>
                <input type="date"
                  id="wd-available-until"
                  value="2024-05-20" /><br />
              </td>
            </tr>
          </td>
        </tr>
      </table>
    </div>
  );
}
