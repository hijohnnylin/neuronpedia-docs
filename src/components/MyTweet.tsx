import type { Tweet } from "react-tweet/api";
import {
  type TwitterComponents,
  TweetContainer,
  TweetHeader,
  TweetInReplyTo,
  TweetBody,
  TweetMedia,
  TweetInfo,
  TweetActions,
  QuotedTweet,
  enrichTweet,
} from "react-tweet";

type Props = {
  tweet: Tweet;
  components?: TwitterComponents;
  includeHeader: Boolean;
};

export const MyTweet = ({ tweet: t, components, includeHeader }: Props) => {
  const tweet = enrichTweet(t);
  return (
    <TweetContainer>
      <div
        style={{
          border: "1px solid #ddd",
          width: "auto",
          borderRadius: "16px",
          padding: "16px 20px",
        }}
      >
        {includeHeader && <TweetHeader tweet={tweet} components={components} />}
        {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />}
        <TweetBody tweet={tweet} />
        {tweet.mediaDetails?.length ? (
          <TweetMedia tweet={tweet} components={components} />
        ) : null}
        {tweet.quoted_tweet && <QuotedTweet tweet={tweet.quoted_tweet} />}
        <TweetInfo tweet={tweet} />
        {/* <TweetActions tweet={tweet} /> */}
        {/* We're not including the `TweetReplies` component that adds the reply button */}
      </div>
    </TweetContainer>
  );
};
