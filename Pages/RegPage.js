import "./RegPage.css";
import React from "react";

export default function Register() {
  return (
    <center>
        <form>
          <table>
            <div>
              <h1>Personal Details</h1>
            </div>
            <tr style={{ display: "flex", justifyContent: "space-between" }}>
              <td>
                <label htmlFor="fname">First Name</label>
                <br />
                <input
                  type="text"
                  required
                  id="first-name"
                  name="first-name"
                  placeholder=""
                  minLength={"3"}
                  maxLength={"25"}
                  title="enter your name"
                  // width={"100%"}
                />
                <br />
              </td>
              <div>
                <label>Upload photo</label>
                <div className="box">
                  <input type="file" accept="image/*" />
                </div>
              </div>
            </tr>
            <tr>
              <td>
                <label htmlFor="lname">Last Name</label>
                <br />
                <input
                  type="text"
                  required
                  id="last-name"
                  name="last-name"
                  placeholder=""
                  minLength={"3"}
                  maxLength={"25"}
                  title="enter your name"
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email ID</label>
                <br />
                <input
                  type="text"
                  required
                  id="emailid"
                  name="email-id"
                  placeholder=""
                  minLength={"3"}
                  maxLength={"25"}
                  title="enter your email-id"
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phone-number">Phone Number</label>
                <br />
                <input
                  type="tel"
                  required
                  id="phone-number"
                  name="first-name"
                  placeholder=""
                  minLength={"3"}
                  maxLength={"25"}
                  title="enter your name"
                />
                <br />
              </td>
            </tr>

            <tr>
              <td>
                <label for="student-address">Address </label>
                <br />
                <textarea
                  name="student-address"
                  id="student-address"
                  cols="100"
                  rows="5"
                  placeholder=" "
                  title="Type your Address"
                ></textarea>
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="fathername">Father Name</label>
                <br />
                <input
                  type="text"
                  required
                  id="father-name"
                  name="father-name"
                  placeholder=""
                  minLength={"3"}
                  maxLength={"25"}
                  title="enter your father name"
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mothername">Mother Name</label>
                <br />
                <input
                  type="text"
                  required
                  id="mother-name"
                  name="mother-name"
                  placeholder=""
                  minLength={"3"}
                  maxLength={"25"}
                  title="enter your name"
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phone-number">Father Number</label>
                <br />
                <input
                  type="tel"
                  required
                  id="phone-number"
                  name="father-number"
                  placeholder=""
                  minLength={"3"}
                  maxLength={"25"}
                  title="enter your father number"
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phone-number">Mother Number</label>
                <br />
                <input
                  type="tel"
                  required
                  id="phone-number"
                  name="mother-number"
                  placeholder=""
                  minLength={"3"}
                  maxLength={"25"}
                  title="enter your mother number"
                />
                <br />
              </td>
            </tr>
            {/*  */}
            <tr>
              <div>
                <h1>Educational Details</h1>
              </div>
            </tr>
            <tr>
              <td>
                <label htmlFor="sslc-percentage">SSLC Percentage</label>
                <br />
                <input
                  type="number"
                  class="demo"
                  title="academic Percentage"
                  required
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="hsc-percentage">HSC Percentage</label>
                <br />
                <input
                  type="number"
                  class="demo"
                  title="academic Percentage"
                  required
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="diplomo-percentage">Diplomo Percentage</label>
                <br />
                <input
                  type="number"
                  class="demo"
                  title="academic Percentage"
                  required
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="collegename">College Name</label>
                <br />
                <input
                  type="number"
                  required
                  id="college-name"
                  name="college-name"
                  placeholder=""
                  minLength={"3"}
                  maxLength={"25"}
                  title="enter your college name"
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="degree">Degree</label>
                <br />
                <input
                  type="text"
                  required
                  id="degree"
                  name="degree"
                  placeholder=""
                  minLength={"3"}
                  maxLength={"25"}
                  title="enter your degree name"
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="department">Department</label>
                <br />
                <input
                  type="text"
                  required
                  id="department"
                  name="department"
                  placeholder=""
                  minLength={"3"}
                  maxLength={"25"}
                  title="enter your department"
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="year of study">Current Year of Study</label>
                <br />
                <input
                  type="text"
                  required
                  id="year"
                  name="yearofstudy"
                  placeholder=""
                  minLength={"3"}
                  maxLength={"25"}
                  title="currentyearofstudy"
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="year of passed out">Year of Passed Out</label>
                <br />
                <input
                  type="number"
                  required
                  id="year"
                  name="yearofpassedout"
                  placeholder=""
                  minLength={"3"}
                  maxLength={"25"}
                  title="yearofpassedout"
                />
                <br />
              </td>
            </tr>
            <tr>
              <div>
                <h1>Other Details</h1>
              </div>
            </tr>
            <tr>
              <label htmlFor="msy">Mode of Study</label>
              <select>
                <option>Online</option>
                <option>Offline</option>
              </select>
              <br />
            </tr>
            <tr>
              <tr>
                <label htmlFor="aboutus">How Did You Hear About Us ?</label>
                <br />
                <input
                  type="text"
                  id="aboutus"
                  placeholder=""
                  minlength="12"
                  size="15"
                />
                <br />
              </tr>
            </tr>
            <tr>
              <label htmlFor="date">Date of Admission</label>
              <br />
              <input
                type="date"
                id="date"
                placeholder=""
                minlength="12"
                size="15"
              />
              <br />
            </tr>
            <tr>
              <label htmlFor="paymenttype">Payment Type</label>
              <select>
                <option>Installment</option>
                <option>Full Payment </option>
              </select>
              <br />
            </tr>
            <tr>
              <td>
                <button onClick="myFunction()">Submit</button>
              </td>
            </tr>
          </table>
        </form>
    </center>
  );
}
