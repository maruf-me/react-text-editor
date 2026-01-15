export interface Template {
  name: string
  html: string
  description?: string
}

export const templatesList: Template[] = [
  {
    name: 'Welcome Letter',
    description: 'A professional welcome letter template',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          Welcome to Our Team!
        </h2>
        <p>Dear [Name],</p>
        <p>We are thrilled to welcome you to our team. Your expertise and passion will be a valuable addition to our organization.</p>
        <p>Please find below some important information to help you get started:</p>
        <ul>
          <li>Your start date: [Date]</li>
          <li>Department: [Department]</li>
          <li>Manager: [Manager Name]</li>
        </ul>
        <p>If you have any questions, please don't hesitate to reach out.</p>
        <p>Best regards,<br>
        [Your Name]<br>
        [Your Title]</p>
      </div>
    `
  },
  {
    name: 'Product Description',
    description: 'A comprehensive product description template',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #2c3e50; text-align: center; margin-bottom: 30px;">
          [Product Name]
        </h1>
        <div style="display: flex; gap: 20px; margin-bottom: 30px;">
          <div style="flex: 1;">
            <img src="[Product Image URL]" alt="[Product Name]" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px;">
          </div>
          <div style="flex: 1;">
            <h3 style="color: #34495e; margin-bottom: 15px;">Key Features</h3>
            <ul style="line-height: 1.6;">
              <li>Feature 1: [Description]</li>
              <li>Feature 2: [Description]</li>
              <li>Feature 3: [Description]</li>
              <li>Feature 4: [Description]</li>
            </ul>
          </div>
        </div>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #2c3e50; margin-bottom: 15px;">Product Specifications</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 8px; font-weight: bold;">Dimensions:</td>
              <td style="padding: 8px;">[Dimensions]</td>
            </tr>
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 8px; font-weight: bold;">Weight:</td>
              <td style="padding: 8px;">[Weight]</td>
            </tr>
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 8px; font-weight: bold;">Material:</td>
              <td style="padding: 8px;">[Material]</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Price:</td>
              <td style="padding: 8px; color: #e74c3c; font-weight: bold; font-size: 1.2em;">$[Price]</td>
            </tr>
          </table>
        </div>
        <p style="line-height: 1.6; color: #555;">
          [Detailed product description goes here. Explain the benefits, use cases, and why customers should choose this product.]
        </p>
      </div>
    `
  },
  {
    name: 'Meeting Minutes',
    description: 'A structured meeting minutes template',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #2c3e50; text-align: center; margin-bottom: 30px;">
          Meeting Minutes
        </h1>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 5px; font-weight: bold; width: 150px;">Meeting Title:</td>
              <td style="padding: 5px;">[Meeting Title]</td>
            </tr>
            <tr>
              <td style="padding: 5px; font-weight: bold;">Date:</td>
              <td style="padding: 5px;">[Date]</td>
            </tr>
            <tr>
              <td style="padding: 5px; font-weight: bold;">Time:</td>
              <td style="padding: 5px;">[Start Time] - [End Time]</td>
            </tr>
            <tr>
              <td style="padding: 5px; font-weight: bold;">Location:</td>
              <td style="padding: 5px;">[Location/Platform]</td>
            </tr>
            <tr>
              <td style="padding: 5px; font-weight: bold;">Attendees:</td>
              <td style="padding: 5px;">[List of attendees]</td>
            </tr>
          </table>
        </div>
        
        <h2 style="color: #34495e; border-left: 4px solid #3498db; padding-left: 15px; margin-top: 30px;">
          Agenda Items
        </h2>
        <ol style="line-height: 1.6;">
          <li>[Agenda Item 1]</li>
          <li>[Agenda Item 2]</li>
          <li>[Agenda Item 3]</li>
        </ol>
        
        <h2 style="color: #34495e; border-left: 4px solid #3498db; padding-left: 15px; margin-top: 30px;">
          Discussion Points
        </h2>
        <div style="margin-bottom: 20px;">
          <h3 style="color: #2c3e50; margin-bottom: 10px;">[Topic 1]</h3>
          <p style="line-height: 1.6; color: #555;">[Discussion details]</p>
        </div>
        
        <h2 style="color: #34495e; border-left: 4px solid #3498db; padding-left: 15px; margin-top: 30px;">
          Action Items
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background-color: #f8f9fa;">
              <th style="padding: 10px; text-align: left; border: 1px solid #dee2e6;">Action</th>
              <th style="padding: 10px; text-align: left; border: 1px solid #dee2e6;">Assigned To</th>
              <th style="padding: 10px; text-align: left; border: 1px solid #dee2e6;">Due Date</th>
              <th style="padding: 10px; text-align: left; border: 1px solid #dee2e6;">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #dee2e6;">[Action 1]</td>
              <td style="padding: 10px; border: 1px solid #dee2e6;">[Person]</td>
              <td style="padding: 10px; border: 1px solid #dee2e6;">[Date]</td>
              <td style="padding: 10px; border: 1px solid #dee2e6;">[Status]</td>
            </tr>
          </tbody>
        </table>
        
        <h2 style="color: #34495e; border-left: 4px solid #3498db; padding-left: 15px; margin-top: 30px;">
          Next Meeting
        </h2>
        <p style="line-height: 1.6; color: #555;">
          <strong>Date:</strong> [Next Meeting Date]<br>
          <strong>Time:</strong> [Next Meeting Time]<br>
          <strong>Location:</strong> [Next Meeting Location]
        </p>
      </div>
    `
  }
]
