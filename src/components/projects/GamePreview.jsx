export default function GamePreview({ gameUrl, width = '600px', height = '500px', aspectRatio = null }) {
  return (
    <div 
      style={{
        width: width,
        height: aspectRatio ? 'auto' : height,
        aspectRatio: aspectRatio || undefined,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a0a0a0',
        margin: '0 auto',
        maxWidth: '100%'
      }}
    >
      <iframe
        src={gameUrl}
        title="Playable Game"
        allowFullScreen
        className="w-full h-full"
        style={{ 
          border: 'none',
          display: 'block',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
}
