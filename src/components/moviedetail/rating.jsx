import React from 'react'

import StarRating from 'react-star-rating'

 

class FormComponent extends React.Component {

  render() { 

    return (

      <form target="_self" method="GET">

        <StarRating name="react-star-rating" caption="Rate this component!" totalStars={10} />

        <button type="submit" className="btn btn-primary">Submit Rating</button>

      </form>

    );

  }

}

 

React.render(<FormComponent />, document.getElementById('star-rating'));