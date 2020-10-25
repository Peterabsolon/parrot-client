import { Chunk, Speaker } from '~/api/models'

export const INITIAL_TEXT = `All right. Good morning, counsel. Back on the record in the Simpson matter. Mr. Simpson is again present before the court with counsel, Mr. Shapiro, Mr. Douglas, Mr. Blasier, Mr. Neufeld, Mr. Scheck, People are represented by Miss Clark, Mr. Darden and Mr. Goldberg. Good morning, counsel. [FOOBAR] Good morning, your Honor. Very briefly. [FOOBAR] We're about ready to reconvene with Mr. Bodziak and conclude his testimony. [FOOBAR] Yes, your Honor. I have him here. I'm ready to go and I'll conclude I believe in half an hour with direct. I wanted to raise with the court the issue of the Stockdale tape. I had a conversation with Mr. Shapiro this morning. He was very helpful in explaining to me the circumstances of the Stockdale tape. I have in my possession now from Mr. Shapiro a copy of the affidavits filed under 1054.7 with the court. I haven't had a chance to read them, but counsel already told me what's in them. It is the bottom line that the tape is no longer in existence. The issue then now to be litigated is what is the remedy for the People. Miss Stockdale is not an adequate substitute for the tape itself, which would be-- [FOOBAR] All right. I think if you peruse the affidavits--my recollection from my last reading of them was that there is a transcript that was prepared. [FOOBAR] Right. That's not going to--that will not satisfy--what the People wanted from the tape is the Defendant's demeanor, his tone of voice, how he sounded. The words are almost irrelevant to what is more important to us, which is the sound of the voice, the tone and the demeanor of the voice, and that's why Miss Stockdale herself, even if she could give us a verbatim memory of the words, would be inadequate. We need--we needed to hear and let the jury hear his voice, and we cannot do that. So, I mean, that's the issue to be framed. I assume-- [FOOBAR] So-- [FOOBAR] I'm sorry. [FOOBAR] I'm just sort of anxious to get started this morning.`

export const MOCK_CHUNKS: Chunk[] = [
  {
    speakerId: '1',
    from: 0,
    to: 57,
    text: "I'm just sort of anxious to get started this morning.",
  },
  {
    speakerId: '2',
    from: 58,
    to: 289,
    text:
      'There was an order by the court, both sides, not to copy these documents. At this point, they seem to be widely disseminated. I wonder if we could have some relief from that so other members of both sides can be more conveniently--',
  },
  {
    speakerId: '1',
    from: 290,
    to: 490,
    text:
      'All right. It appears that that is being publicly disseminated in the news media. So I have no objection to counsel making whatever copies they feel it necessary to make preparations for the argument.',
  },
]

export const MOCK_SPEAKERS: Speaker[] = [
  { id: '1', name: 'The Court' },
  { id: '2', name: 'Mr. Yochelson' },
]
