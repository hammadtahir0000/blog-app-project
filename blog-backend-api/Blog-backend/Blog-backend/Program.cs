using Blog_backend.Data;
    using Blog_backend.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration["ConnectionString"];
builder.Services.AddDbContext<AppDbContext>(option=>option.UseSqlServer(connectionString));

builder.Services.AddScoped<IRepository<Blog>, SqlRepository<Blog>>();
builder.Services.AddScoped<IRepository<Category>, SqlRepository<Category>>();
builder.Services.AddScoped<IRepository<User>, SqlRepository<User>>();

builder.Services.AddAuthentication().AddBearerToken();
builder.Services.AddAuthorization();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
                                                        
app.MapControllers();

app.UseCors(option => option.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.Run();
