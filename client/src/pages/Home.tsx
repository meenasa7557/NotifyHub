import "../styles/Home.css";

function Home(){

return(

<div className="home">


<header>

<div className="logo">
🔔 NotifyHub
</div>


<nav>
<a href="/">Home</a>
<a href="#">Announcement</a>
<a href="#">Event</a>
<a className="urgent-link">Urgent Alert</a>
<a href="/contact">Contact</a>
</nav>

</header>



<section className="hero">

<h1>
Never Miss a Campus Update Again
</h1>

<p>
Your smart campus notification system for every update,
event and emergency.
</p>


</section>





<section className="impact">

<h1>
Real Impact Every Day
</h1>


<div className="stats">


<div>
<h2>8</h2>
<p>Notes</p>
</div>


<div>
<h2>6</h2>
<p>Events</p>
</div>


<div>
<h2>12</h2>
<p>Departments</p>
</div>


<div>
<h2>3</h2>
<p>Emergency Alerts</p>
</div>


</div>

</section>





<section className="needs">


<h1>
Everything Your Campus Needs
</h1>


<div className="features">


<div className="card">
<h2>Urgent Alert System</h2>
<p>
Instant emergency notifications for students and administration.
</p>
</div>



<div className="card">
<h2>Event Platform</h2>
<p>
Manage and track all campus events easily.
</p>
</div>




<div className="card">
<h2>Smart Search</h2>
<p>
Find announcements and information quickly.
</p>
</div>




<div className="card">
<h2>Work Everywhere</h2>
<p>
Access campus updates from anywhere.
</p>
</div>




<div className="card">
<h2>Real-Time Alert</h2>
<p>
Receive instant notifications without delay.
</p>
</div>




<div className="card">
<h2>Live Event Tracker</h2>
<p>
Follow ongoing campus activities live.
</p>
</div>



</div>


</section>




<section className="end">

<h1>
Stay Ahead With NotifyHub
</h1>

<p>
A smarter way to connect students and campus administration.
</p>

</section>



</div>

)

}


export default Home;