import './TrumpMsg.css'

interface Props {
  message: string | undefined;
}

const TrumpMsg: React.FC<Props> = ({message}) => {
    return (
        <div className='trump-item-container'>
              <div className='trump-pfp-name-container'>
                <div className='trump-pfp-container'></div>

                <div className='trump-name-container'>
                  Donald Trump
                </div>
              </div>

              <div className='trump-txt-container'>
                <p>{message}</p>
              </div>
        </div>
    )
}

export default TrumpMsg;