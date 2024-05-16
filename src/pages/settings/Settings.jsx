import "./Settings.css";

const Settings = () => {

    const handleLogOut = () => {
        // TODO: Implement the log out of the user.
        //       This component will have a function passed as a param
        //       that will change the state in the parent class which reflects
        //       current logged state of the user. 
    };

  return (
    <div className="settings">
        <h2>User Information</h2>
        <ul className="settingsList">
            <li className="settingsListItem">
                <h3>Nickname:</h3>
                <span>Smart-Machine</span>
            </li>
            <li className="settingsListItem">
                <h3>Email:</h3>
                <span>smart0machine@gmail.com</span>
            </li>
            <li className="settingsListItem">
                <h3>Role:</h3>
                <span>Writer</span>
            </li>
        </ul>
        <button 
            className="settingsButton" 
            type="submit"
            onClick={handleLogOut}
        >
            Log out
        </button>
    </div>
  );
};

export default Settings;
