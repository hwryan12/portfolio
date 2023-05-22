const projects = [
  {id: "project5", title: "Lynk-Up", type: "school", description: "Lynk Up is a platform for creating, discovering, and managing events. From small gatherings, meetings, to large parties, Lynk Up provides an intuitive and user-friendly platform to manage them all. It encourages social interaction by allowing users to form friend groups and seamlessly organize events with them.", images: ["/images/lynk_up_home.png"]},
  {id: "project1", title: "Character Chords", type: "school", description: "Explore Character Chords, a cutting-edge app merging personality assessments with AI-driven music discovery. Harnessing Ruby on Rails, PostgreSQL, CircleCI, and Amazon S3, this full-stack app integrates Spotify and OpenAI APIs to create a tailored listening experience based on users' personality traits and preferences. With Spotify OAuth, users securely access their accounts, ensuring seamless compatibility with existing preferences. Character Chords offers a technically advanced, personalized musical journey for its users", images: ["/images/cc_home.png", "/images/cc_quiz.png", "/images/cc_result.png", "/images/cc_playlist.png"]},
  {id: "project2", title: "Cinema Social", type: "school", description: "Discover Cinema Social, a web application that simplifies movie night planning with friends. This innovative app leverages Ruby on Rails, PostgreSQL, HTML, and CSS to provide a seamless user experience. By utilizing APIs from The Movie Database (TMDb), Cinema Social allows users to search for movies by title, cast, or director, view comprehensive details, and receive personalized recommendations based on their search history. With the ability to create movie viewing events, add friends to attendee lists, and implement secure user authentication through the Devise gem, Cinema Social ensures an enjoyable and collaborative movie night experience.", images: ["/images/cs_home.png", "/images/cs_home_logged_in.png", "/images/cs_movie_search.png", "/images/cs_movie_results.png"]},
  {id: "project3", title: "Little Etsy Shop", type: "school", description: "Little Esty Shop is a Ruby on Rails application designed to empower merchants by allowing them to create bulk discounts for their items. With a focus on simplicity and efficiency, this app enables merchants to set up discounts based on the quantity of items purchased by customers. By leveraging Ruby on Rails, PostgreSQL, and various other technologies, Little Esty Shop provides merchants with a seamless experience for managing and applying bulk discounts. The app ensures that only the highest percentage discount is applied when multiple bulk discounts are eligible for an item. With a per-item basis approach, the quantity thresholds are strictly enforced, and quantities of items cannot be combined to meet the threshold. Little Esty Shop emphasizes writing clean and comprehensive code, utilizing MVC architecture, and implementing robust testing practices to ensure a reliable and user-friendly experience.", images: ["path_to_project3_wireframe"]},
  {id: "project6", title: "Quest Keeper", type: "personal", description: "Quest Keeper is a full-stack web application that serves as an all-in-one game master guide for Dungeons and Dragons (D&D) players. It offers features like character creation, monster and item lookup, and a dungeon builder. Designed to enhance the D&D experience, Quest Keeper provides a comprehensive toolkit for players and game masters, simplifying session management and fostering creativity in gameplay.", images: ["path_to_project4_wireframe"]},
  {id: "project4", title: "BlackJack", type: "personal", description: "The application is a simplified version of a Blackjack game implemented using JavaScript. It allows users to enter their name and initial chip count, place bets, and play the game against a computer-controlled dealer. The interface displays the player's cards, sum, and message, as well as the dealer's cards and sum. Users can draw new cards, stand, and start a new game. The game logic is implemented in a separate Game class that handles card dealing, turn management, win/lose conditions, and chip handling. The application aims to provide an interactive and enjoyable Blackjack experience for users.", images: ["path_to_project4_wireframe"]}
  // Add more projects as needed
];

export default projects;
