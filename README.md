## Running

```bash
npm install
npm run dev
```

## Answers to the quesions

1. After implementation feedback :
Did you encounter any issues during the implementation ? If so, were you able to bypass them?
- I have not encountered any serious issues

2. Looking closely at the response of the API, do you think there is another way to implement the app ? If yes, what other option could exist ? If no, why not ?
- It would be a bit simpler if there was GraphQl. I would not need to separately request posts, users, media


3. If you were in direct contact with the API service team, what could you ask them to do to make your life easier or optimize the performances?
- Implement GraphQl or REST flag to fetch multiple entities in order to not send separate request


4. What was the most difficult part of the implementation for you and why ?
- Styling	

5. On a scale of 1 to 10, are you satisfied with the result ? Is there anything that needs more attention?
- I would give it a 7. It lacks of error handling, pagination, proper configs to store tokens

6. How long did it take you to implement this development ? Was it longer or shorter than what you initially expected ?
- It took 4 hours. It was as I expected

## Ideas for improvement
* Implement pagination instead of hardcoded load
* Handle request errors
* Add blue thumbs up icon
* Implement better data layer
* Preloading images
* Animation