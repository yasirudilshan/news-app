import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

function NewsCard() {
  const [articles, setArticles] = useState([]);

  const fetch = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=87103f2177704ca882e3359594804bdd"
    );
    console.log(response.data.articles);
    setArticles(response.data.articles);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 8, lg: 12 }}
        sx={{display:"flex", alignItems:"center", justifyContent:"center"}}
      >
        {articles.map((article) => {
          return (
            <Grid item xs={4} sm={4} md={4} lg={4} sx={{display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center"}}>
              <Card
                sx={{
                  width: 345,
                  height: 370,
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "flex-end",
                  boxShadow: 3,
                  marginBottom:3,
                }}
              >
                <CardActionArea
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={article.urlToImage}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="div"
                      align="left"
                      fontWeight={600}
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="left"
                      fontWeight={500}
                      sx={{
                        maxHeight: 100,
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {article.description}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="inherit"
                      component="div"
                      align="left"
                      color="text.secondary"
                      marginTop={1}
                    >
                      By {article.author} - {article.source.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                      align="left"
                      color="text.secondary"
                    >
                      {article.publishedAt}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default NewsCard;
