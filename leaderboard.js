<!-- index.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title>Leaderboard</title>
</head>
<body>
  <h1>Leaderboard</h1>
  <ul>
    <% leaderboards.forEach((leaderboard) => { %>
      <li><%= leaderboard.name %> - <%= leaderboard.score %></li>
    <% }); %>
  </ul>
  <form action="/leaderboard" method="post">
    <input type="text" name="name" placeholder="Name">
    <input type="number" name="score" placeholder="Score">
    <button type="submit">Submit</button>
  </form>
</body>
</html>
