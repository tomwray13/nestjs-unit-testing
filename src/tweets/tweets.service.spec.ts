import { Test, TestingModule } from '@nestjs/testing';
import { TweetsService } from './tweets.service';

describe('TweetsService', () => {
  let service: TweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetsService],
    }).compile();

    service = module.get<TweetsService>(TweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createTweet', () => {
    it('should create tweet', () => {
      // Arrange
      service.tweets = [];
      const payload = 'This is my tweet';

      // Act
      const tweet = service.createTweet(payload);

      // Assert
      expect(tweet).toBe(payload);
      expect(service.tweets).toHaveLength(1);
    });

    it('should prevent over 100 character tweets', () => {
      const payload =
        'This is a long tweet over 100 characters This is a long tweet over 100 characters This is a long t...';

      const tweet = () => {
        return service.createTweet(payload);
      };

      expect(tweet).toThrowError();
    });
  });
});
