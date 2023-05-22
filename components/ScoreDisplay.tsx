export default function ScoreDisplay({ score }) {
    return (
      score && (
        <div>
          <h1>Your passport score is {score} 🎉</h1>
          <div style={styles.hiddenMessageContainer}>
            {
              Number(score) >= THRESHOLD_NUMBER ? (
                <h2>Congratulations, you can view this secret message!</h2>
              ) : (
                <h2>Sorry, your score is not high enough to view the secret message.</h2>
              )
            }
          </div>
        </div>
      )
    );
  }