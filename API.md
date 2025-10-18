# 🔌 API Documentation - Perfect Prompt

API documentation for Perfect Prompt's serverless endpoint.

## 📍 Endpoint

### POST `/api/generate`

Generates an optimized AI prompt based on user input.

**Runtime**: Node.js (serverless function)  
**Method**: POST  
**Content-Type**: application/json

## 📥 Request

### Headers
```http
Content-Type: application/json
```

### Body Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `topic` | string | Yes | The topic or idea to generate a prompt for |
| `language` | string | Yes | Language code: "en" or "ar" |

### Request Example

```json
{
  "topic": "Write a blog post about artificial intelligence",
  "language": "en"
}
```

### cURL Example

```bash
curl -X POST https://yoursite.com/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "Write a blog post about AI",
    "language": "en"
  }'
```

### JavaScript Example

```javascript
const response = await fetch('/api/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    topic: 'Write a blog post about AI',
    language: 'en'
  })
});

const data = await response.json();
console.log(data.prompt);
```

### TypeScript Example

```typescript
interface GenerateRequest {
  topic: string;
  language: 'en' | 'ar';
}

interface GenerateResponse {
  prompt: string;
}

async function generatePrompt(
  topic: string, 
  language: 'en' | 'ar'
): Promise<string> {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topic, language }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate prompt');
  }

  const data: GenerateResponse = await response.json();
  return data.prompt;
}
```

## 📤 Response

### Success Response (200 OK)

```json
{
  "prompt": "As an expert content writer, create a comprehensive blog post about artificial intelligence that:\n\n1. Defines AI and its core concepts\n2. Explains different types of AI (narrow vs. general)\n3. Discusses current real-world applications\n4. Explores ethical considerations\n5. Predicts future developments\n\nThe post should be:\n- 1500-2000 words\n- Written for a general audience\n- Engaging and informative\n- Include relevant examples\n- End with a thought-provoking conclusion\n\nTone: Professional yet accessible\nFormat: Blog post with clear sections and headings"
}
```

### Error Responses

#### 400 Bad Request - Missing Topic
```json
{
  "error": "Topic is required and must be a string"
}
```

#### 400 Bad Request - Invalid Language
```json
{
  "error": "Language must be either \"en\" or \"ar\""
}
```

#### 500 Internal Server Error
```json
{
  "error": "Failed to generate prompt. Please try again."
}
```

## ⚙️ Implementation Details

### OpenAI Configuration

The API uses OpenAI GPT-3.5-turbo with the following configuration:

```typescript
{
  model: 'gpt-3.5-turbo',
  temperature: 0.7,
  max_tokens: 500
}
```

### Rate Limiting

Currently, there's no rate limiting on the frontend. Consider implementing:

- IP-based rate limiting
- API key authentication for external use
- Usage quotas per user

### Error Handling

The API handles the following error cases:
1. Missing or invalid parameters
2. OpenAI API errors
3. Network timeouts
4. Invalid API keys

### Security

- ✅ API key stored in environment variables
- ✅ Server-side only (not exposed to client)
- ✅ Input validation on all parameters
- ✅ Error messages don't expose sensitive info
- ⚠️ No authentication (public endpoint)

## 🔐 Security Recommendations

If you plan to expose this API publicly:

1. **Add Authentication**
   ```typescript
   // Check API key
   const apiKey = request.headers.get('X-API-Key');
   if (!apiKey || !isValidApiKey(apiKey)) {
     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
   }
   ```

2. **Implement Rate Limiting**
   ```typescript
   import { rateLimit } from '@/lib/rate-limit';
   
   const limiter = rateLimit({
     interval: 60 * 1000, // 1 minute
     uniqueTokenPerInterval: 500,
   });
   
   await limiter.check(request.ip, 10); // 10 requests per minute
   ```

3. **Add CORS Headers**
   ```typescript
   return NextResponse.json(data, {
     headers: {
       'Access-Control-Allow-Origin': 'https://yourdomain.com',
       'Access-Control-Allow-Methods': 'POST',
     },
   });
   ```

4. **Validate Input Length**
   ```typescript
   if (topic.length > 500) {
     return NextResponse.json(
       { error: 'Topic too long (max 500 characters)' },
       { status: 400 }
     );
   }
   ```

## 📊 Usage Examples

### Example 1: Content Creation
```json
{
  "topic": "Create a social media post about healthy eating",
  "language": "en"
}
```

### Example 2: Code Generation
```json
{
  "topic": "Write a Python function to calculate fibonacci numbers",
  "language": "en"
}
```

### Example 3: Arabic Prompt
```json
{
  "topic": "اكتب مقالة عن الذكاء الاصطناعي",
  "language": "ar"
}
```

### Example 4: Creative Writing
```json
{
  "topic": "Write a short story about time travel",
  "language": "en"
}
```

### Example 5: Business
```json
{
  "topic": "Create a marketing strategy for a startup",
  "language": "en"
}
```

## 🚀 Performance

### Response Times
- **Average**: 2-4 seconds
- **P95**: 5-7 seconds
- **Timeout**: 30 seconds (Vercel default)

### Optimization Tips
1. Cache frequent prompts
2. Use streaming responses (future)
3. Implement request queuing
4. Add CDN caching for static content

## 🧪 Testing

### Test with cURL
```bash
# Test English
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{"topic":"Test prompt","language":"en"}'

# Test Arabic
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{"topic":"اختبار","language":"ar"}'

# Test error handling
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{}'
```

### Test with JavaScript
```javascript
// Test suite
async function testAPI() {
  const tests = [
    { topic: 'Test', language: 'en', shouldPass: true },
    { topic: 'اختبار', language: 'ar', shouldPass: true },
    { topic: '', language: 'en', shouldPass: false },
    { topic: 'Test', language: 'fr', shouldPass: false },
  ];

  for (const test of tests) {
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(test),
      });
      console.log(`Test ${test.topic}: ${res.ok ? 'PASS' : 'FAIL'}`);
    } catch (error) {
      console.error(`Test ${test.topic}: ERROR`, error);
    }
  }
}
```

## 📝 Notes

- API is serverless and scales automatically
- Cold starts may take 1-2 seconds
- OpenAI API has its own rate limits
- Monitor OpenAI usage to control costs
- Consider implementing caching for popular prompts

## 🔮 Future Enhancements

- [ ] Streaming responses
- [ ] Multiple AI models support
- [ ] Prompt variations
- [ ] Batch processing
- [ ] WebSocket support
- [ ] GraphQL endpoint
- [ ] Response caching
- [ ] Request analytics

---

For more information, see the [README.md](README.md) or [SETUP.md](SETUP.md).

